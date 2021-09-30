import React, {useEffect} from "react";
import {Button, Divider, Layout, Table} from "antd";
import {LayoutComponentProps} from "../pages/types";

const LayoutComponent = (props: LayoutComponentProps) => {

    return (
        <Layout>
            <Layout.Content className="site-layout" style={{ width: 700, marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    <Divider orientation="left">{props.text}</Divider>
                    {props.children}
                </div>
            </Layout.Content>
        </Layout>
    )
}

export default LayoutComponent