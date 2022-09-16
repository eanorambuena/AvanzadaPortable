:: In the next lines, write your IIC2233 repository name in <repository_name>
:: Then, discomment each line under "@echo off" and save the file

@echo off

cd "./Avanzada/"
:: start Code.exe "./Repositories/<repository_name>"
:: start git-bash.exe --cd=./Repositories/<repository_name>/

cd "./bin"
start git.exe config --global --add safe.directory "./Repositories/Syllabus"
:: start git.exe config --global --add safe.directory "./Repositories/<repository_name>/"
exit