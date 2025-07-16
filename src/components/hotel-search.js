import React, {useState, useContext} from "react";
import axios from "axios";

import DataSharingContext from "../context/data-sharing-context";

const HotelSearchComponent = () => {

    const context = useContext (DataSharingContext);

    const [hotelForm, submitHotelForm] = useState({
        hotelLocation : "",
        ckeckIn : "",
        checkOut : "",
        price : ""
    });

    const onHandleInput = (event) => {
        submitHotelForm({...hotelForm, [event.target.name] : event.target.value});
    }

    const searchHotels = () => {
        console.log(hotelForm);

        const url = `http://localhost:4000/list/hotel?hotelLocation=${hotelForm.hotelLocation}`;

        axios.get(url)
        .then((response) => {
            const result = response.data;
            context.globalFunction(result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="tab-pane show active" id="v-pills-1" role="tabpanel"
            aria-labelledby="v-pills-nextgen-tab">
            <form action="#" className="search-property-1">
                <div className="row no-gutters">
                    <div className="col-md d-flex">
                        <div className="form-group p-4 border-0">
                            <label for="#">Destination</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-search"></span></div>
                                <input type="text" className="form-control" placeholder="Search place" onChange={onHandleInput} name="hotelLocation"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex">
                        <div className="form-group p-4">
                            <label for="#">Check-in date</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-calendar"></span></div>
                                <input type="date" className="form-control checkin_date" placeholder="Check In Date" onChange={onHandleInput} name="ckeckIn"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex">
                        <div className="form-group p-4">
                            <label for="#">Check-out date</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-calendar"></span></div>
                                <input type="date" className="form-control checkout_date" placeholder="Check Out Date" onChange={onHandleInput} name="checkOut"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex">
                        <div className="form-group p-4">
                            <label for="#">Price Limit</label>
                            <div className="form-field">
                                <div className="select-wrap">
                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                    <select id="" className="form-control" onChange={onHandleInput} name="price">
                                        <option>₹1,000</option>
                                        <option>₹5,000</option>
                                        <option>₹10,000</option>
                                        <option>₹15,000</option>
                                        <option>₹20,000</option>
                                        <option>₹25,000</option>
                                        <option>₹30,000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex">
                        <div className="form-group d-flex w-100 border-0">
                            <div className="form-field w-100 align-items-center d-flex">
                                <input type="button" value="Search"
                                    className="align-self-stretch form-control btn btn-primary" onClick={() => searchHotels()} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HotelSearchComponent;