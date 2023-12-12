import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card, Spin } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const { data: cryptoNews, error, isLoading } = useGetCryptoNewsQuery({ count: simplified ? 6 : 12 });

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <div>Error loading news data. Please try again later.</div>;
  }

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.Url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.Title}
                </Title>
                <img src={news.Image || demoImage} alt='news' />
              </div>
              <p>
                {news.Description.length > 100
                  ? `${news.Summary}...`
                  : news.Description}
              </p>
              <div className='provider-container'>
                <Avatar src={news.Source || demoImage} alt='' />
                <Text>{moment(news.PublishedOn).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
