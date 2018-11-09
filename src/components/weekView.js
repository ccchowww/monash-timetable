import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

class WeekView extends Component {
	render() {
		const rawJson = this.props.ttData;
		const sortedJson = rawJson.sort(function(a , b){
			var a = moment(a.timeStart, 'HH:mm')
			var b = moment(b.timeStart, 'HH:mm')
			console.log('====')
			return a - b
		})
		console.log(sortedJson)
		console.log(this.props.ttData);
		const allData = sortedJson
			.map( ({ unitName, unitSeries, timeStart, duration, classroomType }) => {
				return (
					<div className="individual-card">
						<p> Unit Name :  {unitName} </p>
						<p> Unit Series : {unitSeries} </p>
						<p> Time Start : {timeStart} </p>
						<p> Duration : {duration} </p>
						<p> End Time : <Moment add={{ hours : duration}} parse="HH:mm" format="HH:mm">{timeStart}</Moment> </p>
						<p> Classroom Type : {classroomType} </p>
					</div>
				) 
			})
		// console.log(this.props.ttData)
		return (
			<div>
				{allData}
			</div> 
		)		
	}
}

export default WeekView;