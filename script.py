import json
with open('./assets/apitemp.json', 'r') as archivo:
    # Carga el contenido del archivo JSON en un diccionario
    datos = json.load(archivo)
data = datos["data"]
for i in data:
    print(i["common_name"])