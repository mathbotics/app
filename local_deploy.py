import os, time
import subprocess
import shlex

ROOT_PATH = os.getcwd()
BACKEND_PATH = ROOT_PATH + '/backend/'
FRONTEND_PATH = ROOT_PATH + '/frontend/'
DOCKER_PATH = ROOT_PATH + '/docker/'

def docker_runner():
    print("***********\n* Docker *\n***********\n")
    os.chdir(DOCKER_PATH)
    docker = subprocess.Popen(shlex.split('docker-compose up'), stdout=subprocess.PIPE)
    start = time.time()
    time.process_time()    
    elapsed = 0
    while True:
        output = docker.stdout.readline()
        output = output.decode("utf-8")
        elapsed = time.time() - start
        if "mathbotics_" in output and docker.poll() is None:
            break
    rc = docker.poll()
    if rc is None:
        print("Docker deployed Successfully")
    else:
        raise Exception("Error running docker\n{}".format(rc))


def main():
    docker_runner()

    print("\n***********\n* Backend *\n***********\n")
    os.chdir(BACKEND_PATH)
    os.system('yarn')
    os.system('yarn gen')

    print("\n***********\n* Frontend *\n***********\n")
    os.chdir(FRONTEND_PATH)
    os.system('yarn')
    os.system('yarn relay')

    print("\n***********\n* Finished *\n***********\n")


main()