#!/bin/bash

echo "Stopping running containers..."
docker-compose down

echo "Pruning all unused images..."
docker image prune -a -f

echo "Starting containers..."
docker-compose up
