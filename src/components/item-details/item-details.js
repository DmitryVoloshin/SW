import React from 'react';


import './item-details.css'


const Record = ( {item,field,label} ) =>{
    return(
    <li className="person-details_item">
        <span>{label}</span>
        <span>{item[field]}</span>
    </li>
    )
}

export{
    Record
};


export default class ItemDetails extends React.Component{

    state ={
        item:null,
        image:null,
    };

    //lifecycle start
    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }
    //lifecycle end

    updateItem(){
        const { itemId,getData,getImageUrl} = this.props;
        if(!itemId){
            return;
        }
        getData(itemId)
            .then((item)=>{
                this.setState({
                    item,
                    image:getImageUrl(item)
                })
            })
    };

    render(){

        const { item,image } = this.state
        if(!item){
            return <span>Chose person</span>
        }

        const { name } = item;

    return (
        <div className="person-details_list">
            <img  src={image}
            alt="person pic" className="person-details_pic"></img>
            <div>
                <h3 className="person-details_title">{name}</h3>
                <ul>
                    { 
                        React.Children.map(this.props.children,(child)=>{
                            return React.cloneElement(child, { item } );
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
}

