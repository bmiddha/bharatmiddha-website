<img align="right" src="public/images/logo120.png" />

# bharatmiddha-website

[![GitHub Actions](https://github.com/bmiddha/bharatmiddha-website/workflows/Node%20CI/badge.svg?branch=main&event=push)](https://github.com/bmiddha/bharatmiddha-website/actions?query=workflow%3A"Node+CI")
[![GitHub Actions](https://github.com/bmiddha/bharatmiddha-website/workflows/docker-cd-main/badge.svg?branch=main&event=push)](https://github.com/bmiddha/bharatmiddha-website/actions?query=workflow%3Adocker-cd-main)

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

This repository is licensed under the terms of the GPL Open Source license and is available for free. View the [LICENSE](https://github.com/bmiddha/bharatmiddha-website/blob/main/LICENSE) document for more details.
