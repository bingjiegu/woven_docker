create database if not exists merce;
use merce;
CREATE TABLE IF NOT EXISTS script_execution
(
    execId              VARCHAR(64) NOT NULL PRIMARY KEY,
    job_id              VARCHAR(64),
    task_id             VARCHAR(64),
    processing_state    VARCHAR(64),
    update_time         BIGINT,
    submit_time         BIGINT,
    execution_time      BIGINT,
    completion_time     BIGINT,
    exit_code           VARCHAR(64),
    yarn_app_id         VARCHAR(64),
    hadoop_job_id       VARCHAR(64),
    spark_app_id        VARCHAR(64),
    heartbeat_time      BIGINT
) ENGINE = INNODB  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS df_executions
(
    df_execution_id     VARCHAR(32) NOT NULL PRIMARY KEY,
    flow_type           VARCHAR(10),
    engine              VARCHAR(8),
    task_id             VARCHAR(64) NOT NULL,
    job_id              VARCHAR(64),
    name                VARCHAR(64),
    status              VARCHAR(16),
    start_time          BIGINT,
    end_time            BIGINT,
    elapsed_time        BIGINT,
    finished_steps      INT,
    total_steps         INT,
    tracking_url        VARCHAR(512),
    history_url         VARCHAR(512),
    yarn_application_id VARCHAR(256),
    pid                 VARCHAR(8),
    input_bytes         BIGINT,
    output_bytes        BIGINT,
    input_records       BIGINT,
    output_records      BIGINT,
    error_code          VARCHAR(16),
    error_message       VARCHAR(4096),
    inputs              TEXT,
    outputs             MEDIUMTEXT,
    last_report_time    BIGINT,
    submitter           VARCHAR(64),
    version             INT,
    heartbeat_time      BIGINT,
    UNIQUE KEY `unique_task_idx` (task_id)
) ENGINE = INNODB  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS df_submissions
(
    df_submission_id VARCHAR(64) NOT NULL PRIMARY KEY,
    df_execution_id  VARCHAR(64),
    name             VARCHAR(64),
    flow_id          VARCHAR(64),
    flow_json        MEDIUMTEXT,
    flow_conf        VARCHAR(4096),
    flow_env         VARCHAR(4096),
    FOREIGN KEY (df_execution_id) REFERENCES df_executions (df_execution_id) ON DELETE CASCADE
) ENGINE = INNODB  DEFAULT CHARSET = utf8;
  
CREATE TABLE IF NOT EXISTS pipeline_session_workflows
(
    workflow_id   VARCHAR(64) NOT NULL PRIMARY KEY,
    process_id    VARCHAR(64),
    flow_state    VARCHAR(9),
    task_counter  VARCHAR(10240),
    total_task    INT,
    finished_task INT,
    version INT,
    cluster_id VARCHAR(64),
    start_time    BIGINT
) ENGINE = INNODB  DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS pipeline_session_tasks
(
    task_id   VARCHAR(64) NOT NULL PRIMARY KEY,
    workflow_id   VARCHAR(64),
    node_id    VARCHAR(64),
    task_type    VARCHAR(16),
    create_time BIGINT,
    elapsed_time  BIGINT,
    total    BIGINT,
    finished BIGINT,
    input_bytes BIGINT,
    input_records BIGINT,
    output_bytes BIGINT,
    output_records BIGINT,
    note    VARCHAR(64),
    appId   VARCHAR(64),
    fid VARCHAR(64),
    pid VARCHAR(64),
    exit_code SMALLINT,
    message LONGTEXT,
    exception LONGTEXT,
    processing_state VARCHAR(64),
    outputs TEXT,
    owner VARCHAR(64),
    CONSTRAINT `workflow_fk` FOREIGN KEY (workflow_id) REFERENCES pipeline_session_workflows (workflow_id) ON DELETE CASCADE
) ENGINE = INNODB  DEFAULT CHARSET = utf8;


CREATE TABLE `merce_flow_upload_tmp` (
  `id` varchar(18) NOT NULL,
  `name` varchar(64) NOT NULL,
  `owner_id` varchar(64) NOT NULL,
  `tenant_id` varchar(64) NOT NULL,
  `file_data` mediumblob,
  UNIQUE KEY `owner_id` (`owner_id`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `merce_livy_session` (
 `tenant_id` varchar(64) NOT NULL,
 `session_id` int(11) NOT NULL,
 `session_type` varchar(9) NOT NULL,
 `cluster_id` varchar(64) NOT NULL,
 `version` int(11) DEFAULT NULL,
 UNIQUE KEY (`tenant_id`,`cluster_id`,`session_type`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;



