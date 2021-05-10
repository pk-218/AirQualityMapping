import json


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