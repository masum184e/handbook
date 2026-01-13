Rate limiting restricts how many requests a client can make to the API within a certain time window. It protects servers from being overloaded and ensures fair usage.

**Key Concepts:**

- Client Identification: Usually via API key, IP address, or user token.
- Time Window: Can be per second, minute, hour, or day.
- Response When Limit Exceeded: Typically HTTP 429 Too Many Requests.

**Common Rate Limiting Strategies**

| Strategy           | How it works                                                                             | Use case                                           |
| ------------------ | ---------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Fixed Window**   | Count requests per fixed interval (e.g., 1000 requests per hour).                        | Simple, but can cause spikes at window boundaries. |
| **Sliding Window** | Tracks requests over a rolling time window.                                              | Smoothes traffic spikes better than fixed window.  |
| **Token Bucket**   | Client has a “bucket” of tokens; each request consumes one. Tokens refill at a set rate. | Flexible bursts allowed; popular in APIs.          |
| **Leaky Bucket**   | Requests flow at a fixed rate; excess requests are queued or dropped.                    | Smoothens traffic spikes strictly.                 |

## Fixed Window Rate Limiting

Scenario: API allows 5 requests per minute per client.

1. Client requests:
   ```sh
   GET /api/users/123
   ```
2. Server checks request count in current minute:
   - If ≤ 5 → process normally, return 200 OK
   - If > 5 → reject with 429 Too Many Requests

Response when limit exceeded:

```sh
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
Retry-After: 60

{
  "error": "Rate limit exceeded. Try again in 60 seconds."
}
```

- `Retry-After` tells the client how long to wait before retrying.
- This prevents server overload and informs the client.

## Headers Commonly Used for Rate Limiting

REST APIs often provide headers so clients know their rate limit status:

| Header                  | Meaning                                     |
| ----------------------- | ------------------------------------------- |
| `X-RateLimit-Limit`     | Max requests allowed in the window          |
| `X-RateLimit-Remaining` | Requests left in the current window         |
| `X-RateLimit-Reset`     | Time when the window resets (epoch seconds) |

Example Response Headers:

```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 2
X-RateLimit-Reset: 1673265600
```

Helps clients avoid hitting limits and implement retry logic.
