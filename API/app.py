# imports
from flask import Flask
import requests


# ambee API key
# Shhhh! Dont see it.. It's kinda private
API_KEY = 'trJxcgJuPW1bBeVJZGI1Szb30RJenz9sUTIZKh30'

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


# returns AQI bases on lat and lng

@app.route('/by-lat-lng/<lat>/<lng>')
def by_lat_lng(lat, lng):
    url = "https://api.ambeedata.com/latest/by-lat-lng"
    querystring = {"lat": float(lat), "lng": float(lng)}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.text



# returns AQI bases on postalcode and county code (optional)
# default countryCode India (IN)
@app.route('/by-postal-code/<postalCode>')
@app.route('/by-postal-code/<postalCode>/<countryCode>')

def by_postal_code(postalCode, countryCode="IN"):
    
    url = "https://api.ambeedata.com/latest/by-postal-code"
    querystring = {"postalCode":int(postalCode) ,"countryCode":countryCode}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.text

#returns AQI of city
@app.route('/by-city/<cityName')
def by_city_name(cityName):
    url = "https://api.ambeedata.com/latest/by-city"
    querystring = {"city":cityName}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.text

#returns avg AQI of country
@app.route('/by-country/<countryName>')
def by_country_name(countryName):
    url = "https://api.ambeedata.com/latest/by-country-code"
    querystring = {"countryCode":countryName}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.text

@app.route('/historical/by-lat-lng/<lat>/<lng>/<from>/<to>')
def historical(lat, lng, from, to):
    url = "https://api.ambeedata.com/history/by-lat-lng"
    querystring = {"lat":float(lat), "lng":float(lng) ,"from": from + " 12:16:44","to": to + " 12:16:44"}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.text

@app.route('/historical/by-postalCode/<postalCode>/<from>/<to>')
def historical_postal(postalCode, from , to):
    url = "https://api.ambeedata.com/latest/by-postal-code"
    querystring = {"postalCode":postalCode,"countryCode":"IN","from": from + " 12:16:44","to": to + " 12:16:44"}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.text

@app.route('/most-polluted')
def most_polluted():
    url = "https://api.ambeedata.com/latest/by-order/worst"
