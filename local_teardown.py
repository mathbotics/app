import os

ROOT_PATH = os.getcwd()
BACKEND_PATH = ROOT_PATH + '/backend/'
FRONTEND_PATH = ROOT_PATH + '/frontend/'
DOCKER_PATH = ROOT_PATH + '/docker/'


def main():
    os.chdir(DOCKER_PATH)
    print("***************************\n* Docker Compose Teardown *\n***************************\n")
    os.system('docker-compose down')
    print("\n***************************\n* Docker Compose Teardown Finished *\n***************************\n")

    print("\n***************************\n* Docker Container Removal *\n***************************\n")
    os.system('docker rm $(docker ps -a -q)')
    print("\n***************************\n* Docker Container Removal Finished*\n***************************\n")

    print("\n***************************\n* Docker Images Removal *\n***************************\n")
    os.system('docker rmi $(docker images -a -q)')
    print("\n***************************\n* Docker Images Removal Finished *\n***************************\n")

main()