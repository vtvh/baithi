import random
import string
import json

data = [
    {
        "id": "S01",
        "name": "Marnie",
        "email": "marnie@gmail.com",
        "dob": "2000-08-12"
    },
    {
        "id": "S02",
        "name": "Anne",
        "email": "anne@yahoo.com",
        "dob": "2003-12-12"
    },
    {
        "id": "S03",
        "name": "Chelsea",
        "email": "chelsea@gmail.com",
        "dob": "2002-02-25"
    },
    {
        "id": "S04",
        "name": "Washington",
        "email": "washington@hotmail.com",
        "dob": "2002-06-14"
    }
]

random_data = []

for _ in range(100):
    random_entry = {}
    for key, value in data[0].items():
        if key == "id":
            random_entry[key] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=3))
        elif key == "name":
            random_entry[key] = ''.join(random.choices(string.ascii_uppercase, k=6))
        elif key == "email":
            random_entry[key] = ''.join(random.choices(string.ascii_lowercase, k=6)) + "@gmail.com"
        elif key == "dob":
            random_entry[key] = "2000-01-01"  # You can generate random dates if needed
    random_data.append(random_entry)

print(json.dumps(random_data, indent=2))
