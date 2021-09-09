export instantId=$(curl http://169.254.169.254/latest/meta-data/instance-id)
export web_az=$(curl http://169.254.169.254/latest/meta-data/placement/availability-zone)
echo $instantId >> a.log
echo $web_az >> a.log
npm install
npm start > nohup.out &
