git fetch
git fetch --all
git fetch --prune
git pull

# Generate Docker File
if [ ! -f .docker.env ]; then
    touch .docker.env
    echo "DEV_PORT = 5000" >> '.docker.env'
    echo "USE_CORS = false" >> '.docker.env'
    echo "ALLOWEDOMAINS = " >> '.docker.env'
    echo "NODE_ENV = development" >> '.docker.env'
fi


# Continue running... 
yarn --silent --emoji --ignore-scripts
docker compose up --build