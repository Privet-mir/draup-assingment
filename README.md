# Draup Interview Task

## prerequisite
1. ansible (https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
2. python3 and pip3 (sudo apt-get install python3 python3-pip)
3. aws cli  (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
4. boto3 (pip install boto3 botocore)
5. jq (sudo apt-get install jq)

## Task
- [x] Create a `Ansible Playbook` for deployment of EC2 Instance and ELB over AWS

#### Steps
1. generate ssh keys
    ```aws ec2 create-key-pair --key-name draup --query 'KeyMaterial' --output text > draup.pem ```

2. Run Playbook
    ``` ansible-playbook -i hosts aws.yml --private-keys draup.pem```

3. Once script execution is completed goto aws ec2 console and visit load balancer section check if LB state is active, if yes, then copy LB DNS and paste in browser
    
    ![alt instance1](https://github.com/Privet-mir/draup-assingment/blob/master/img/instance1.png)

    ![alt instance2](https://github.com/Privet-mir/draup-assingment/blob/master/img/instance2.png)
