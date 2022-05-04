#! /bin/sh

if [[ $1 == "--dev" ]]; then
  echo "Running backend in dev mode"
  docker run --rm --network host car-shop-backend npm run dev
else
  echo "Running backend in prod mode"
  docker run --rm --network host car-shop-backend
fi
