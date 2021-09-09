export instantId=$(curl http://169.254.169.254/latest/meta-data/instance-id) && web_az=$(curl http://169.254.169.254/latest/meta-data/placement/availability-zone) && npm install &&  npm start
