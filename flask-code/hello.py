

from multiprocessing import Value
from flask import Flask,jsonify, request
import numpy as np
import re


import pandas as pd
from flask_cors import CORS


df=pd.read_csv("C:\\Users\\admin\\Desktop\\mlsuggest.csv")
#df.head()

#df

from sklearn.feature_extraction.text import TfidfVectorizer
tfidf=TfidfVectorizer()
features=tfidf.fit_transform(df['category'])

from sklearn.metrics.pairwise import cosine_similarity
cosine_sim=cosine_similarity(features,features)
#print(cosine_sim)

index=pd.Series(df['Task'])
#index

def reccomend_task(task):
  tasks=[]
  idx=index[index==task].index[0]
  #print(idx)
  score=pd.Series(cosine_sim[idx]).sort_values(ascending=False)
  print(score)
  top5=list(score.iloc[0:3].index)
  print(top5)
  for i in top5:
    tasks.append(df['Task'][i])
  return tasks

# declare constants
HOST = '0.0.0.0'
PORT = 8081

# initialize flask application
app = Flask(__name__)
CORS(app)
@app.route('/', methods=['POST','GET'])
# get parameters from request
def train():
    #parameters = request.get_json()
    data=request.data
    print(data)
    data1=str(data,'utf-8')
    data2=data1.strip('\"')
    print(data2)
      
    print(type(data1))
    print(type("clean eyes"))
    return jsonify({"Suggestions":reccomend_task(data2)})

# if __name__ == '__main__':
#     # run web server
#     app.run(host=HOST,
#             debug=True,  # automatic reloading enabled
#             port=PORT)
app.run()