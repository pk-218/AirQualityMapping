import json
import datetime

#config file contains 5 different API keys defined as:
#API_KEY_1 = "1st API_KEY"
# API_KEY_2 = "2nd API_KEY"
#API_KEY_3 = "3rd API_KEY"
#API_KEY_4 = "4th API_KEY"
#API_KEY_5 = "5th API_KEY"
# save this file as config.py in the same directory
# if you have more or less api keys , edit the get_API_key() function 
#below appropriately

#get the API key from "ambee"

from config import *

#Utility functions for API


def restrict(json_object):
    ''' Returns a python dict containing the information 
        of important fields from all data
        acts as a filter for API to get only certain fields
        instead of whole data.

        Input : A JSON object returned by the API.
        Output : A python dict containing only specified fields.
    '''

    #convert json to python 
    responce = json.loads(json_object)

    result = {}

    #Specified fields, only fields we wanted to get info of
    queries = ['lat' , 'lng' , 'AQI' , 'PM25' , 'PM10']

    for query in queries:
        res = responce['stations'][0][query]
        result.update({query: res})

    res = responce['stations'][0]['aqiInfo']['category']

    result.update({'status': res})
    
    return result


class Counter(object):
    def __init__(self , count,date):
        self.count = count
        self.date = date

    def setdate(self,date):
        self.date = date
    
    def getCount(self):
        return self.count

    def getdate(self):
        return self.date
    
    def increment(self):
        self.count = self.count + 1
    
    def reset(self):
        self.count = 0    



date_ = datetime.datetime.now().date()
counter = Counter(0,date_)

def get_API_key():
    now = datetime.datetime.now().date()
    if now != counter.getdate():
        counter.setdate(now)
        counter.reset()
        counter.increment()
        return API_KEY_1
 
    if counter.getCount() >= 100:
        counter.increment()
        return API_KEY_1

    elif counter.getCount() >= 200:
        counter.increment()
        return API_KEY_2

    elif counter.getCount() >= 300:
        counter.increment()
        return API_KEY_3

    elif counter.getCount() >= 400:
        counter.increment()
        return API_KEY_4

    else:
        counter.increment()
        return API_KEY_5

def getInitial_Data():
    data = {
        "Ahmedabad": {
          "AQI": 84, 
          "PM10": 51.55, 
          "PM25": 27.973, 
          "lat": 23.022315, 
          "lng": 72.570365, 
          "status": "Moderate"
        }, 
        "Bhopal": {
          "AQI": 80, 
          "PM10": 88.333, 
          "PM25": 25.667, 
          "lat": 23.262586, 
          "lng": 77.412973, 
          "status": "Moderate"
        }, 
        "Delhi": {
          "AQI": 117, 
          "PM10": 70.208, 
          "PM25": 42.12, 
          "lat": 28.707339, 
          "lng": 77.090242, 
          "status": "Unhealthy for Sensitive Groups"
        }, 
        "Indore": {
          "AQI": 84, 
          "PM10": 70, 
          "PM25": 27.667, 
          "lat": 22.717230999999998, 
          "lng": 75.865378, 
          "status": "Moderate"
        }, 
        "Jaipur": {
          "AQI": 145, 
          "PM10": 95.363, 
          "PM25": 53.297, 
          "lat": 26.913446, 
          "lng": 75.782196, 
          "status": "Unhealthy for Sensitive Groups"
        }, 
        "Kanpur": {
          "AQI": 150, 
          "PM10": 92.034, 
          "PM25": 55.22, 
          "lat": 26.457218, 
          "lng": 80.32897, 
          "status": "Unhealthy for Sensitive Groups"
        }, 
        "Lucknow": {
          "AQI": 107, 
          "PM10": 95.467, 
          "PM25": 37.933, 
          "lat": 26.845661, 
          "lng": 80.941979, 
          "status": "Unhealthy for Sensitive Groups"
        }, 
        "Mumbai": {
          "AQI": 86, 
          "PM10": 92.034, 
          "PM25": 28.667, 
          "lat": 19.072239, 
          "lng": 72.88053199999999, 
          "status": "Moderate"
        }, 
        "Nagpur": {
          "AQI": 81, 
          "PM10": 43.767, 
          "PM25": 26.26, 
          "lat": 21.141132, 
          "lng": 79.084861, 
          "status": "Moderate"
        }, 
        "Patna": {
          "AQI": 144, 
          "PM10": 92.034, 
          "PM25": 53, 
          "lat": 25.593589, 
          "lng": 85.134013, 
          "status": "Unhealthy for Sensitive Groups"
        }, 
        "Salem": {
          "AQI": 61, 
          "PM10": 76.162, 
          "PM25": 4.9, 
          "lat": 42.5151, 
          "lng": -70.9003, 
          "status": "Moderate"
        }, 
        "Thane": {
          "AQI": 155, 
          "PM10": 106.567, 
          "PM25": 63.94, 
          "lat": 19.22682, 
          "lng": 72.968812, 
          "status": "Unhealthy"
        }, 
        "Vadodara": {
          "AQI": 111, 
          "PM10": 65.667, 
          "PM25": 39.4, 
          "lat": 22.3092, 
          "lng": 73.1848, 
          "status": "Unhealthy for Sensitive Groups"
        }, 
        "Visakhapatnam": {
          "AQI": 72, 
          "PM10": 44, 
          "PM25": 22, 
          "lat": 17.686816, 
          "lng": 83.218482, 
          "status": "Moderate"
        }, 
        "bengalore": {
          "AQI": 94, 
          "PM10": 54.57, 
          "PM25": 32.74, 
          "lat": 12.9677, 
          "lng": 77.592101, 
          "status": "Moderate"
        }, 
        "chennai": {
          "AQI": 17, 
          "PM10": 11.333, 
          "PM25": 4, 
          "lat": 13.08184, 
          "lng": 80.27158, 
          "status": "Good"
        }, 
        "hyderabad": {
          "AQI": 63, 
          "PM10": 59.667, 
          "PM25": 18, 
          "lat": 17.382807, 
          "lng": 78.48514, 
          "status": "Moderate"
        }, 
        "kolkata": {
          "AQI": 33, 
          "PM10": 35.627, 
          "PM25": 2.233, 
          "lat": 22.574644, 
          "lng": 88.363066, 
          "status": "Good"
        }, 
        "pune": {
          "AQI": 98, 
          "PM10": 69.127, 
          "PM25": 34.357, 
          "lat": 18.5227254, 
          "lng": 73.8531266, 
          "status": "Moderate"
        }, 
        "surat": {
          "AQI": 107, 
          "PM10": 63.413, 
          "PM25": 38.05, 
          "lat": 21.181276999999998, 
          "lng": 72.832667, 
          "status": "Unhealthy for Sensitive Groups"
        }
    }
    return data