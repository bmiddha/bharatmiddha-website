<img align="right" src="public/images/logo120.png" />

# bharatmiddha-website

[![Release](https://img.shields.io/website?label=release&url=https%3A%2F%2Fbharatmiddha.com%2F)](https://bharatmiddha.com)
[![node-ci](https://img.shields.io/github/workflow/status/bmiddha/bharatmiddha-website/node-ci?label=node-ci)](https://github.com/bmiddha/bharatmiddha-website/actions?query=workflow%3A%22node-ci%22)
[![docker-cd-master](https://img.shields.io/github/workflow/status/bmiddha/bharatmiddha-website/docker-cd-master?label=build:%20docker-cd-master)](https://github.com/bmiddha/bharatmiddha-website/actions?query=workflow%3A%22docker-cd-master%22)
[![License](https://img.shields.io/github/license/bmiddha/bharatmiddha-website)](https://github.com/bmiddha/bharatmiddha-website/blob/master/LICENSE)

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
