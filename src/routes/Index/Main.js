import React, { Component, Fragment } from 'react';
import styles from './Main.less';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Divider,
  Dropdown,
  Avatar,
} from 'antd';
import numeral from 'numeral';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from 'components/Charts';
import Trend from 'components/Trend';
import NumberInfo from 'components/NumberInfo';
import { getTimeDistance } from '../../utils/utils';

const { TabPane } = Tabs;
let classNames = require('classnames');
export default class Main extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
  };

  render() {
    const topColResponsiveProps = {
      xs: 32,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },
    };

    const btnClass = classNames({
      'btn': true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered,
    });
    const aa={
      marginLeft:10
    }
    return (
      <Fragment>
        <Row gutter={24}>
          <Col>
            <Card
              bordered={false}
            >
              <div className={styles.root}>
                <div className={styles.hh}>
                  <div>
                    <Avatar icon="user" />
                  </div>
                  <div className={styles.header}>
                    <div className={btnClass} onclick={this.isPressed}>username</div>
                    <div>账号信息，权限</div>
                  </div>
                </div>
                <div className={styles.rightheader}>
                  <div>
                    <span>可新建终端数量:<span>SignWay OS:0</span></span>
                    <span>Windows:<span>0</span></span>
                    <span>Android:<span>952</span></span>
                    <span>Touch:<span>17</span></span>
                  </div>
                  <div>
                    <span>服务器到期时间:<span>2116-12-01</span></span>
                  </div>
                </div>
              </div>
              <Divider dashed />
              <div className={styles.bottom}>
                <Row type="flex" justify="start" gutter={8}>
                  <Col span={8} className={styles.aa}>
                    <div className={styles.leftpanel}>
                        你好棒
                    </div>
                  </Col>
                  <Col span={8} className={styles.aa}>col-8</Col>
                  <Col span={8} className={styles.aa}>col-8</Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Fragment>
    )
  }
}