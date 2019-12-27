###################################################################
### docker build --force-rm --no-cache --rm --tag woven_platform:1.6 .
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

RUN mkdir -p /woven_platform/logs

COPY conf /woven_platform/conf/

COPY bin /woven_platform/bin/

COPY libs /woven_platform/libs/

COPY df-executor /woven_platform/df-executor/

COPY pipeline-server /woven_platform/pipeline-server/

COPY woven-server /woven_platform/woven-server/

COPY df-spark /woven_platform/df-spark/

COPY livy-server /woven_platform/livy-server/

COPY more-executors /woven_platform/more-executors/

COPY woven-discovery /woven_platform/woven-discovery/

COPY livy-server/rsc-jars/hbase-client-1.1.2.2.6.5.0-292.jar /woven_platform/df-spark/lib

COPY libs/jars/mysql-connector-java-5.1.48.jar /woven_platform/libs/df-spark/

COPY libs/jars/ojdbc7-12.1.0.1.0.jar /woven_platform/libs/df-spark/

#COPY docs /woven_platform/docs/

COPY ./docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh
 
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD /bin/sh -c "while true; do sleep 60; done"
