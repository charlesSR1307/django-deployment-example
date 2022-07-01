import os
from unicodedata import name
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'proTwo.settings')

import django
django.setup()

from appTwo.models import User
from faker import Faker

fakegen = Faker()

def populate(N=5):
    for entry in range(N):
        fakeName = fakegen.first_name()
        fakeLastName = fakegen.last_name()
        fakeEmail = fakegen.email()
        
        user_recc = User.objects.get_or_create(firstName=fakeName, lastName=fakeLastName, email=fakeEmail)[0]
        
if __name__ == '__main__':
    print('populating script!')
    populate(20)
    print('populating complete!')
    