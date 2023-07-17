import React, { Component } from 'react'
import "./news.css";
import Newsitem from '../newsitem/newsitem';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
        country : "in",
        pageSize: 12
  }

  static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string,
   }
      capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
  constructor(props){
    super(props);
    this.state = {
        data : [],
        page:1
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- DailyFeed`;
  };

  async componentDidMount(){
    let url = `http://api.mediastack.com/v1/news?access_key=f3552263a083c0cd9947310388881d18&keywords=${this.props.category}&countries=${this.props.country}&limit=100`
    let data = await fetch(url);
    let pasedData = await data.json();
    this.setState({data: pasedData.data, total: pasedData.total});
  }

  handleNext = async () =>{
    if(this.state.page +1 > Math.ceil(this.state.total/this.props.pageSize)){

    }
    else
    {
    let url = `http://api.mediastack.com/v1/news?access_key=f3552263a083c0cd9947310388881d18&keywords=${this.props.category}&countries=${this.props.country}&limit=100`
    let data = await fetch(url)
    let pasedData = await data.json()
    this.setState({
      page : this.state.page +1,
      data: pasedData.data
    })
  }

  }

  handlePrev =  async () =>{
    let url = `http://api.mediastack.com/v1/news?access_key=f3552263a083c0cd9947310388881d18&keywords=${this.props.category}&countries=${this.props.country}&limit=100`
    let data = await fetch(url)
    let pasedData = await data.json()
    this.setState({
      page : this.state.page -1,
      data: pasedData.data
    })

  }
  render() {
    return (
        <div className="container my-3">
          <h1 className='text-center' style={{margin: "40px 0px"}}>DailyFeed - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          <div className="row">
            {this.state.data.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                           <Newsitem title = {element.title} description = {element.description} imageUrl = {element.image} url = {element.url} auther = {element.author} date = {element.published_at} source = {element.source} />
                        </div>
            })}
          </div>
         </div>
    )
  }
}

export default News
