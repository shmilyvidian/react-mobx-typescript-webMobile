import {inject, observer} from 'mobx-react';
import * as React from 'react'; 
import { WingBlank,
  WhiteSpace,
  Card } from 'antd-mobile';
import { Stores } from '../../stores/index';
import { HomeStore } from '../../stores/HomeStore';
interface IProps {
  stores: Stores;
}
@inject('stores')
@observer
class Mobile extends React.Component <IProps> {
  public stores:Stores;
  public homeStore:HomeStore;
  constructor(props:IProps){
    super(props);
    this.stores = props.stores;
    this.homeStore = props.stores.homeStore;
  }
  public render () {
    try {
        return (
          <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="This is title"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                extra={<span>this is extra</span>}
              />
              <Card.Body>
                <div>This is content of `Card`</div>
              </Card.Body>
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>        
        )

    } catch (e) {
        return <p>页面出错：{e.toString()}</p>
    }
  }
}

export default Mobile
