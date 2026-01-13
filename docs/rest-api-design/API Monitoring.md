API Monitoring is the continuous process of tracking the availability, performance, and correctness of your API endpoints in real-time or at scheduled intervals.

**Goals of API Monitoring:**

1. Ensure uptime — the API is available for consumers.
2. Track performance metrics — response time, latency, throughput.
3. Detect errors and failures — server errors, authentication failures, invalid responses.
4. Enable alerts and notifications for operational issues.
5. Provide insights for scaling — detect load patterns, bottlenecks.

## Key Metrics in API Monitoring
| Metric                               | Description                                         |
| ------------------------------------ | --------------------------------------------------- |
| **Uptime / Availability**            | Percentage of time API is operational (e.g., 99.9%) |
| **Response Time / Latency**          | Time taken to process a request                     |
| **Error Rate**                       | Percentage of failed requests (HTTP 4xx, 5xx)       |
| **Throughput / Requests per Second** | How many requests API handles per time unit         |
| **SLA Compliance**                   | Whether API meets Service Level Agreements          |
| **Resource Usage**                   | CPU, memory, database connections                   |

## What Is API Logging

API Logging involves capturing detailed information about API requests, responses, and system events to facilitate debugging, auditing, and monitoring.

**Logs Typically Include:**

- Timestamp of request
- HTTP method & URL
- Headers (Authorization, Content-Type)
- Request body / parameters
- Response status and body
- Execution time
- Errors or exceptions
- User or service identity (optional)

## Logging Levels
| Level     | Purpose                                                            |
| --------- | ------------------------------------------------------------------ |
| **INFO**  | General API usage (request received, successful response)          |
| **DEBUG** | Detailed internal info for troubleshooting (DB queries, variables) |
| **WARN**  | Non-critical issues (deprecated endpoints, slow responses)         |
| **ERROR** | Failures or exceptions (server errors, crashes)                    |
| **FATAL** | Critical failures causing downtime                                 |

## Logger Implementation
**Logger Middleware**

```ts
// logger.js
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'api.log');

function logger(req, res, next) {
  const start = Date.now();
  const { method, url, body } = req;

  res.on('finish', () => {
    const duration = Date.now() - start;
    const logEntry = {
      timestamp: new Date().toISOString(),
      method,
      url,
      status: res.statusCode,
      duration: `${duration}ms`,
      requestBody: body,
    };
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  });

  next();
}

module.exports = logger;
```
Using Logger in App
```ts
const express = require('express');
const logger = require('./logger');
const app = express();

app.use(express.json());
app.use(logger);

app.post('/api/users', (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ error: "Name and email required" });
  }
  res.status(201).json({ id: 1, ...req.body });
});

app.listen(3000, () => console.log("API running on port 3000"));
```

## Integrating Monitoring Tools

Logging data can be sent to monitoring tools like:

- ELK Stack (Elasticsearch, Logstash, Kibana)
- Prometheus + Grafana (metrics collection)
- Datadog, New Relic, Splunk (full observability)

**Example Metrics Extraction**

- Count all `500` status codes → triggers alert
- Measure average response time → visualize slow endpoints
- Track `POST /api/users` errors → SLA compliance
