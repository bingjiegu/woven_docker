###################################################################
### docker build --force-rm --no-cache --rm --tag woven_app:0.9.0.27 .
###################################################################

FROM centos:7.2.1511

MAINTAINER bingjie.gu "bingjie.gu@inforefiner.com"

RUN rpm --rebuilddb && yum install -y net-tools iputils lsof wget

# Java
RUN rpm --rebuilddb && yum install -y \
       java-1.8.0-openjdk \
       java-1.8.0-openjdk-devel

ENV JAVA_HOME /etc/alternatives/jre

ENV JRE_HOME  $JAVA_HOME

ENV PATH $PATH:$JAVA_HOME/bin

ENV CLASSPATH=.:$JRE_HOME/lib:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

#设置系统编码
RUN rpm --rebuilddb && yum install kde-l10n-Chinese -y

RUN rpm --rebuilddb && yum install glibc-common -y

RUN localedef -c -f UTF-8 -i zh_CN zh_CN.utf8

ENV LANG zh_CN.UTF-8

ENV LC_ALL zh_CN.UTF-8

# 修改时区
RUN echo "Asia/shanghai" > /etc/timezone;

RUN rm -f /etc/localtime

RUN ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# woven_platform dirs

RUN mkdir -p /woven_app/logs

COPY conf /woven_app/conf/

COPY bin /woven_app/bin/

COPY client /woven_app/client/

COPY libs /woven_app/libs/

COPY woven-app /woven_app/woven-app/

COPY woven-ui /woven_app/woven-ui/

COPY ./docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh
 
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD /bin/sh -c "while true; do sleep 60; done"
