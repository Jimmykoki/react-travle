import React from 'react';
import styles from './HomePage.module.css';
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
  BusinessPartner,
} from '../../components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from './mockup';
import { withTranslation, WithTranslation } from 'react-i18next';

import sideImage from '../../assets/images/side-image.png';
import sideImage2 from '../../assets/images/side-image-2.png';
import sideImage3 from '../../assets/images/side-image-3.png';

class HomePageComponent extends React.Component<WithTranslation> {
  render(): React.ReactNode {
    const { t } = this.props;

    return (
      <>
        <Header />
        {/* Content */}
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={5}>
              <SideMenu />
            </Col>
            <Col span={19}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t('home_page.hot_recommended')}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t('home_page.new_arrival')}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t('home_page.domestic_travel')}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />
          <BusinessPartner />
        </div>

        <Footer />
      </>
    );
  }
}

export const HomePage = withTranslation()(HomePageComponent);
