from django.shortcuts import render
from django.conf import settings
from django.templatetags.static import static
import os
from django.http import HttpResponse

# Create your views here.

def home(request):
    # path = 'D:\\Arun\\all video and image'
    path = settings.MEDIA_ROOT
    img_list = os.path.join(path, 'all_image')
    # img_list = os.listdir(path + '/all_image')
    print('img_list----', img_list)
    images = os.listdir(img_list)
    print('images----', images)

    # for i in os.listdir(img_list):
    #     print(i)
    # search_item = request.GET.get("item_search")
    # if search_item in images:
    #     print('search_item----', search_item)
    #     return search_item


    context = {'images': images}
    
    # print('image---',search_item)
    
    #     search = request.POST.get('search')
    #     print(search)
    return render(request, 'home.html', context)

# def word_search(request):
#     search_item = request.GET.get("item_search")
#     if search_item in images:
#         print('search_item----', search_item)
#         return search_item

#     return render(request, 'home.html', {'search_item', search_item})

