---
title: Hide Referral Tips
sidebar_position: 10
---

Alova can cooperate with the extension library to obtain a better development experience. In order to allow more developers to obtain a better development experience, the extension of alova will be recommended in the console when using it.

![tips](/img/alova-tips.jpg)

These prompt codes will be automatically removed when building the production environment package. If you want to hide them in the development environment, you can do the following:

## Vite

Set environment variable **VITE_ALOVA_TIPS=0** in `.env.development` file

```bash title=.env.development
VITE_ALOVA_TIPS=0
```

## Webpack

### Vue

Set environment variable **VUE_APP_ALOVA_TIPS=0** in `.env.development` file

```bash title=.env.development
VUE_APP_ALOVA_TIPS=0
```

### React

Set environment variable **REACT_APP_ALOVA_TIPS=0** in `.env.development` file

```bash title=.env.development
REACT_APP_ALOVA_TIPS=0
```