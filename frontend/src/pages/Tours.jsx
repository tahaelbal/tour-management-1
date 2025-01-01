import React, {useState, useEffect} from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import Newsletter from '../shared/Newsletter';
import SearchBar from '../shared/SearchBar';
import TourCard from '../shared/TourCard';
import tourdata from '../assets/data/tours';
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
import axios from 'axios'

const Tours = ({perPage}) => {
  const [activite , setActivite] = useState([])
  const [pageCount, setPageCount] = useState(0)
  

  useEffect(()=>{
    const fetchProducts = async (page = 1, perPage = perPage || 20) => {
      const url = "https://dayafandco.shop/wp-json/wc/v3/products";
      const params = {
        consumer_key: "ck_bdaa0764cfdaeed34e7daf87ee11d6fb7193031a",
        consumer_secret: "cs_d2a58ed464609e02267574f858baaa4058878a21",
        per_page: perPage, // Number of products per page
        page: page,
        category:356        // The current page
      };
    
      try {
        const response = await axios.get(url, { params });
        setActivite(response.data); // Logs the products
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error.response?.data || error.message);
      }
    };
    
    // Example: Fetch 5 products from page 2
    fetchProducts(2,perPage|| 20);
  },[])

  return (
    <>

      <CommonSection title={'ALL ttours'}/>
      <section>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section>
        <div className="px-4 grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-4 gap-4">

            {
              activite?.map((activite,i)=> (
                <TourCard activite={activite}/>
              ))
            }       
        </div>     
      </section>
      <Newsletter/>
    </>
    )
}

export default Tours