###################################################################
### docker build --force-rm --no-cache --rm --tag logstash:2.4 .
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

# woven_logserver dirs

RUN mkdir -p /logstash

COPY bin /logstash/bin/

COPY config /logstash/config/

COPY lib /logstash/lib/

COPY vendor /logstash/vendor/

COPY Gemfile /logstash/

COPY Gemfile.jruby-1.9.lock /logstash/

COPY LICENSE /logstash/

COPY nohup.out /logstash/

COPY ./docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh
 
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD /bin/sh -c "while true; do sleep 60; done"
