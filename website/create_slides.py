import json
slide = {'imageSrc': None, 'desc': None}

i = 1
while i < 4:
	slide['imageSrc'] = './img/spotlight' + str(i) + '.png'
	
	with open('./txt/spotlight' + str(i) + '.txt', 'r') as desc:
		file_contents = desc.read()
		slide['desc'] = file_contents
	# To be in javascript format
	var_template = 'var %s = %s;'
	# variable name to reference in javascript file
	var_name = 'slide' + str(i)
	# Writing the dictionary to string in json format
	var_value = json.dumps(slide)
	# Replace the %s in the template with the proper values
	item_entry = var_template % (var_name, var_value)
	# write the line in the json file to be imported to javascript
	if i > 1:
		with open('./js/spotlight.json', 'a') as data_file:
			data_file.write(item_entry)
			data_file.write('\n')
	else:
		with open('./js/spotlight.json', 'w') as data_file:
			data_file.write(item_entry)
			data_file.write('\n')
	i += 1
