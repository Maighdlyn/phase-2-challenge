The quiz is worth __50 points__ in total.

_Reminder: you can use the internet to help you answer these questions :)_

- When you run a command in the terminal, where does BASH look for that command?

```
BASH looks for the command in the directories in $PATH
```

- On a UNIX computer, how do you stop a running process?

```
Ctrl + C
```

- What packages do you have installed via homebrew?

```
homebrew (found using 'brew cask list'):
cask		emacs		openssl		postgresql	readline

homebrew cask(found using 'brew cask'):
atom                       iterm2                     skype
google-chrome              postgres                   slack
google-chrome-canary       postico

```

- On a UNIX computer, how do you find the process id of a running process?

```
Run 'ps' or 'top' in your command line and the process id will show under "PID" in the left column.
```

- In a terminal, what does control-c do?

```
Control-c stops whatever process is running.
```

- In a terminal, what does control-a do?

```
Control-a jumps the cursor to the beginning of the line.
```

- In a terminal, what does control-e do?

```
Control-e jumps the cursor to the end of the line.
```

- What keyboard shortcut do you use to split the screen in your editor?

```
In Atom, press command + k + the arrow for the direction you want the screen to split.
```

- What keyboard shortcut do you use to split the screen in your terminal?

```
To split vertically: command + shift + d
To split horizontally: command + d
```

- When a terminal command completes, how can you tell if it was successful or not?

```
Enter 'echo $?' in command line. If it returns a 0, that means the last command was successful. If it returns something other than 0, it means the last command was not successful.
```

- What does your `~/.gitconfig` have in it? (paste the whole file here)

```
# This is Git's per-user configuration file.
[user]
# Please adapt and uncomment the following lines:
#	name = Emma Brown
#	email = emb42@humboldt.edu
[user]
name = maighdlyn
email = emmamaighdlyn@gmail.com
```

- What is the difference between a relative and absolute path?

```
A relative path is a path written in relation to the location the path occurs in, an absolute path is the specific path where the file is located on a particular computer. For example, the relative path for README.md, relative to this quiz.md file, is "../README.md" but the absolute path for me is "/Users/emmabrown/Desktop/LGProjects/phase-2-challenge/part-4/quiz.md". It's better to use relative paths because as you're reading this on your computer, it will have a different absolute path.
```

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?

```
cd ../pinterest-for-dogs
```

- What keyboard shortcut do you use, in your editor, when you want to open a specific file?
<!-- Still need to answer!!! -->

- What files or folders do you want all git repositories to ignore?

```
You want git to ignore node_modules because you would typically include instructions in the README for the viewer to load that in their terminal. You would also want git to ignore .DS_store because that's local information that helps with things like icon location.
```

- What is the main difference between `==` and `===` in JavaScript?

```
Strict equality is '===' so it has higher standards than '==' when accepting that two things are equal. For example 4 == '4' would be true even though one is a string and one is a number but 4 === '4' would be false because strict equals requires values to be the same data type.
```
