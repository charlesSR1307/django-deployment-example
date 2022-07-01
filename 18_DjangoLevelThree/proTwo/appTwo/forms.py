from typing_extensions import Required
from django import forms
from appTwo.models import User

class NewUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'