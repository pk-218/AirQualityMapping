# imports
from flask import Flask, render_template, request, jsonify
import requests

from config import API_KEY
from utilities import restrict

app = Flask(__name__)

BASE_URL = 'https://api.ambeedata.com'



# defaulting search by city
@app.route('/', methods=['GET', 'POST'])
def index():
    '''Default route , searches by city '''
    if request.method == 'POST':
        city = request.form.get('cityname')
        responce = by_city_name(city)
        return responce
    return render_template('index.html')


# Selected top 25 cities according to their population
city_list = ["Mumbai", 'Delhi', 'bengalore', 'chennai', 'pune']

# route to return required data of all above cities in single
# JSON object


@app.route('/get-cities-data')
def get_cities_data():
    '''returns required data of all cities specified'''

    result = {}
    for city in city_list:
        responce = by_city_name(city)
        responce = restrict(responce)
        result.update({city: responce})

    return jsonify(result)


# returns AQI bases on lat and lng

@app.route('/by-lat-lng/<lat>/<lng>')
def by_lat_lng(lat, lng):

    '''returns data of a particular location based on its latitude and longitude
        request by /by-lat-lng/<lat>/<lng>'''

    url = BASE_URL + "/latest/by-lat-lng"
    querystring = {"lat": float(lat), "lng": float(lng)}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
    }
    response = requests.request(
        "GET", url, headers=headers, params=querystring)
    return response.text


# returns AQI bases on postalcode and county code (optional)
# default countryCode India (IN)
@app.route('/by-postal-code/<postalCode>')
@app.route('/by-postal-code/<postalCode>/<countryCode>')
def by_postal_code(postalCode, countryCode="IN"):

    '''returns data of a particular location bases on postalcode and county code (optional, IN default)
        request by /by-postal-code/<postalCode>
                   /by-postal-code/<postalCode>/<countryCode>'
                    '''

    url = BASE_URL + "/latest/by-postal-code"
    querystring = {"postalCode": int(postalCode), "countryCode": countryCode}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    return response.text

# returns AQI of city


@app.route('/by-city/<cityName>')
def by_city_name(cityName):

    '''returns data of a particular location based on its name (all major cities covered)
        request by /by-city/<cityName>'''

    url = BASE_URL + "/latest/by-city"
    querystring = {"city": cityName}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
    }
    response = requests.request(
        "GET", url, headers=headers, params=querystring)
    return response.text



# returns avg AQI of country , India by default
@app.route('/by-country/')
@app.route('/by-country/<countryName>')
def by_country_name(countryName="IN"):
    '''returns avergae data of a particular country based on its name (all major counties covered)
        request by /by-country/<countryName> , Pass internation standard two aplhabet code for
        the country . e.g.: For India, pass = "IN" or request /by-country/IN
        India is to default'''
        
    url = BASE_URL + "/latest/by-country-code"
    querystring = {"countryCode": countryName}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
    }
    response = requests.request(
        "GET", url, headers=headers, params=querystring)
    return response.text


@app.route('/historical/by-lat-lng/<lat>/<lng>/<from_>/<to>')
def historical(lat, lng, from_, to):

    '''returns historical data of a particular location based on its latitude and longitude
        and time 
        request by /historical/by-lat-lng/<lat>/<lng>/<from_>/<to>
        e.g. /historical/by-lat-lng/23.0651/26.4820/12-05-2019/13-05-2019'''

    url = BASE_URL + "/history/by-lat-lng"
    querystring = {"lat": float(lat), "lng": float(
        lng), "from_": from_ + " 12:16:44", "to": to + " 12:16:44"}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
    }
    response = requests.request(
        "GET", url, headers=headers, params=querystring)
    return response.text


@app.route('/historical/by-postalCode/<postalCode>/<from_>/<to>')
def historical_postal(postalCode, from_, to):

    '''returns historical data of a particular location based on its postal code
        and time 
        request by historical/by-postalCode/<postalCode>/<from_>/<to>
        e.g. /historical/by-postalCode/400019/12-05-2019/13-05-2019'''

    url = BASE_URL + "/latest/by-postal-code"
    querystring = {"postalCode": postalCode, "countryCode": "IN",
                   "from_": from_ + " 12:16:44", "to": to + " 12:16:44"}
    headers = {
        'x-api-key': API_KEY,
        'Content-type': "application/json"
    }
    response = requests.request(
        "GET", url, headers=headers, params=querystring)
    return response.text


# @app.route('/most-polluted')
# def most_polluted():
#     ''' returns most polluted city'''
#     url = BASE_URL + "/latest/by-order/worst"
#not implemented - cancled


if __name__ == '__main__':
    app.run(debug=True)
