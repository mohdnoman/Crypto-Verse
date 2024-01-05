import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card, Spin } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import {useGetCryptosQuery} from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
//  const [newsCategory, setNewsCategory]=useState('Cryptocurrency')
  // const { data: cryptoNews, error, isLoading } = useGetCryptoNewsQuery({ count: simplified ? 6 : 12 });
  const { data: cryptoNews, error, isLoading } = useGetCryptoNewsQuery('Cryptocurrency');
  const {data} = useGetCryptosQuery(100); 
  
  if (isLoading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <div>Error loading news data. Please try again later.</div>;
  }

  return (
    <Row gutter={[24, 24]}>
      {/* {!simplified &&(
        <Col span={24}>
          <Select
          showSearch
          className='select-news'
          placeholder='Select a Crypto'
          optionFilterProp='children'
          onChange={(value) => setNewsCategory(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexof(input.toLowerCase()) >= 0}
          >
               <Option value="Crptocurrency">Crptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )} */}
      {cryptoNews?.news.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card size="small" hoverable className='news-card'>
            <a href={news.Url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.Title > 20 ? "Some interesting news" : news.Title}
                </Title>
                <img width={100} height={100}  src={news.Image || demoImage} alt='news' />
              </div>
              <p>
                {news.Description}
              </p>
              <div className='provider-container'>
                <div>
                <Avatar src={news.Source || demoImage} alt='' />
                <Text className='provider-name'>{news.Source}</Text>
                </div>
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
