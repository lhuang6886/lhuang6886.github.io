# -*- coding: utf-8 -*-
"""
Created on Fri May  6 17:39:56 2022

@author: laura
"""

from git import Repo
import keyboard

PATH_OF_GIT_REPO = "C:/Users/laura/Documents/Fulbright Project/lhuang6886.github.io"  # make sure .git folder is properly configured
COMMIT_MESSAGE = 'comment from python script'
counter=0

def git_push():
    try:
        repo = Repo(PATH_OF_GIT_REPO)
        repo.git.add(update=True)
        repo.index.commit(COMMIT_MESSAGE)
        origin = repo.remote(name='origin')
        origin.push()
    except:
        print('Some error occured while pushing the code')    

while True:
    if keyboard.read_key() == "p":
        with open('readme.txt', 'w') as f:
            for i in range(3):
                f.write('file'+str(counter)+".json")
                f.write('\n')
                counter += 1
        f.close()
        git_push()
            