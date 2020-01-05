<img align="right" src="public/images/logo120.png" />

# bharatmiddha-website

[![GitHub Actions](https://github.com/bmiddha/bharatmiddha-website/workflows/Node%20CI/badge.svg?branch=master&event=push)](https://github.com/bmiddha/bharatmiddha-website/actions?query=workflow%3A"Node+CI")
[![GitHub Actions](https://github.com/bmiddha/bharatmiddha-website/workflows/docker-cd-master/badge.svg?branch=master&event=push)](https://github.com/bmiddha/bharatmiddha-website/actions?query=workflow%3Adocker-cd-master)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b05cf272-4fc5-4726-8648-4d76c36c1cce/deploy-status)](https://app.netlify.com/sites/optimistic-spence-a21275/deploys)

Personal website for [Bharat Middha](https://github.com/bmiddha).

## Getting Started

- Dependencies: npm install
- Building: npm run build
- Developing: npm run start

## Docker Deployment

The [bmiddha/bharatmiddha-website](https://hub.docker.com/r/bmiddha/bharatmiddha-website) docker image is tiny and runs a production ready app in NGINX.

```sh
docker pull bmiddha/bharatmiddha-website:latest
docker run -it --rm -p 8080:80 bmiddha/bharatmiddha-website:latest
```

## License

This repository is licensed under the terms of the GPL Open Source license and is available for free. View the [LICENSE](https://github.com/bmiddha/bharatmiddha-website/blob/master/LICENSE) document for more details.
