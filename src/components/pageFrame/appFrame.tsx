// import { inject, observer  } from 'mobx-react';
import * as React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './App.scss';
import { NavBar, Icon } from 'antd-mobile';


class AppFrame extends React.Component <any, {}>{
  constructor(props:any) {
    super(props);
  }


  public renderChildRoute(childRoute:any, props:object){
    return (
    <childRoute.component
      // containHeight={homeStore.height}
      // defaultHeight={homeStore.height - 93}
      name={childRoute.name} {...props}
      // tHeight = {homeStore.tHeight}
      // collapsed={homeStore.collapsed}
    />)

  }

  public render() {
    const props = this.props;
    try {
      return (
        <div className="h__min_100vh">
            <div className="content__main App">
            <div>
              <NavBar
                mode="light"
                icon={<Icon type="left" />}
                // tslint:disable-next-line:no-console
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}
              >NavBar</NavBar>

              <NavBar
                mode="dark"
                leftContent="Back"
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}
              >NavBar</NavBar>
            </div>
            <Switch>
              {props.routes.map((childRoute:any, index:number) => (<Route
                    key={index}
                    path={childRoute.path}
                    render={ this.renderChildRoute.bind(this,childRoute, props) }
                  />)
                )}
            </Switch>
            </div>

      </div>
      );
    } catch(e) {
      return <p>页面出错：{e.toString()}</p>
    }
  }
}

export default AppFrame;
