## Convolutional Neural Networks (CNN-based Models)

These are the backbone of classical deep learning in vision.

### Foundational

* **LeNet-5 (1998)**

  * Task: Digit recognition
  * Key idea: Convolution + pooling layers
  * Limitation: Very shallow, small-scale

* **AlexNet (2012)**

  * Task: Image classification
  * Innovation:

    * ReLU activation
    * Dropout
    * GPU training
  * Triggered modern deep learning boom

### Deep CNN Architectures

* **VGGNet (2014)**

  * Architecture: Very deep (16–19 layers)
  * 특징: Uses small 3×3 convolutions
  * Drawback: Large parameters (~138M)

* **GoogLeNet (Inception v1) (2014)**

  * Key idea: Inception modules (multi-scale filters)
  * Efficient compared to VGG

* **ResNet (2015)**

  * Innovation: Skip connections (residual learning)
  * Enables very deep networks (50, 101, 152 layers)

* **DenseNet (2017)**

  * Feature reuse via dense connections
  * Better gradient flow, fewer parameters


### Lightweight / Mobile Models

* **MobileNet**

  * Uses depthwise separable convolutions
  * Optimized for edge devices

* **EfficientNet**

  * Balances depth, width, resolution
  * State-of-the-art efficiency

## Vision Transformers (ViT Family)

Replacing CNNs in many tasks.

* **Vision Transformer (ViT) (2020)**

  * Treats image as patches (like tokens)
  * Requires large datasets

* **Swin Transformer**

  * Local attention windows
  * Scales better than vanilla ViT

* **DeiT**

  * Efficient training with distillation

## Object Detection Models

### Two-stage detectors

* **R-CNN**
* **Fast R-CNN**
* **Faster R-CNN**

  * Pipeline: Region proposals → classification
  * High accuracy, slower

### One-stage detectors

* **YOLO (You Only Look Once)**

  * Real-time detection
  * Versions: YOLOv1 → YOLOv8/YOLOv9

* **SSD (Single Shot Detector)**

  * Faster than Faster R-CNN

* **RetinaNet**

  * Solves class imbalance with focal loss

## Image Segmentation Models

### Semantic Segmentation

* **FCN (Fully Convolutional Network)**

* **U-Net**

  * Encoder-decoder with skip connections
  * Widely used in medical imaging

* **DeepLab**

  * Uses dilated convolutions

### Instance Segmentation

* **Mask R-CNN**

  * Extends Faster R-CNN with mask prediction

## Generative Models (Image Synthesis)

### GAN-based

* **GAN (Generative Adversarial Network)**
* **DCGAN**
* **StyleGAN**

  * Very realistic image synthesis

### Diffusion Models (Modern SOTA)

* **DDPM**
* **Stable Diffusion**

  * Text-to-image generation
  * Efficient latent space modeling

## Self-Supervised / Multimodal Models

* **CLIP**

  * Joint vision-language model
  * Zero-shot classification

* **DINO**

  * Strong representation learning without labels

* **BLIP**

  * Image captioning + VQA

## Video Understanding Models

* **C3D**

  * Spatiotemporal CNN

* **I3D**

  * Inflates 2D CNN filters to 3D

* **TimeSformer**

  * Uses attention over time

## Pose Estimation Models

* **OpenPose**

  * Multi-person keypoint detection

* **HRNet**

  * Maintains high-resolution features

## Super-Resolution Models

* **SRCNN**
* **ESRGAN**

  * Produces high-quality upscaled images

## 3D Vision / NeRF

* **NeRF (Neural Radiance Fields)**

  * Novel view synthesis
  * Photorealistic 3D reconstruction

## Optical Flow Models

* **FlowNet**
* **RAFT**

  * High-accuracy motion estimation