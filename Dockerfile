FROM mhart/alpine-node:6.2.0

WORKDIR /app

# Need curl for functional test
RUN apk add --update curl && rm -rf /var/cache/apk/*

# Install node modules
COPY package.json package.json
RUN npm install

# Set PATH for CLI tools
ENV PATH=/app/src:/app/node_modules/.bin:/bin:$PATH

# Add app source code
COPY src src

ENTRYPOINT ["employee-loader"]
