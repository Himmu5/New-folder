
import AllContant from './AllContant';

function MainContant() {

  const data=[
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg',
      title:'MUG',
      product:'Black Printed Coffee Mug',
      price:15.00,
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'

    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/mug-coffee-5.jpg',
      title:'MUG',
      product:'Father’s Day Coffee Mug',
      price:19.00,
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'

    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/mug-yellow-4.jpg',
      title:'MUG',
      price:34.00,
      product:'Personalized Mug',
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'

    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/tshirt6-4.jpg',
      title:'Tshirt',
      price:40.00,
      product:'Yellow Printed Tshirt',
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'
      
    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/tshirt2-4.jpg',
      title:'Tshirt',
      price:32.00,
      product:'Blue Printed Tshirt',
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'
      
    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/tshirt5-4.jpg',
      title:'Tshirt',
      price:48.00,
      product:'Green Printed Tshirt',
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'
      
    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/tshirt7-4.jpg',
      title:'Tshirt',
      price:60.00,
      product:'Orange Printed Tshirt',
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'
      
    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/tshirt3-4.jpg',
      title:'Tshirt',
      price:80.00,
      product:'Pink Printed Tshirt',
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'
      
    },
    {
      photo:'https://trycasuals.com/wp-content/uploads/2018/06/mug-blue-4.jpg',
      title:'MUG',
      price:20.00,
      product:'Blue Printed MUG',
      description:'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.'
      
    }
  ]



  return (
    <div className="bg-gray-100">
      
      
      <AllContant products={data}/>
     

    </div>
  );
}

export default MainContant;
