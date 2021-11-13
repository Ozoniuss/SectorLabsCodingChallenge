from django.urls import path
from .views import index


urlpatterns = [

    # redirect every link on the frontend to the index function, which will generate the App component
    path('', index)


]
