from django.contrib import messages
from django.db.models import Q
from django.http import Http404
from django.shortcuts import get_object_or_404, render
from django.core.paginator import Paginator, InvalidPage
from django.views.generic import ListView, DetailView

from .models import *
from ..account.models import UserProfile


class Blog(ListView):
    template_name = 'blog/blog.html'
    model = Post
    paginate_by = 6
    # all_posts = Post.objects.order_by('pub_date').filter(status='Published')

    def get_queryset(self):
        return Post.objects.order_by('pub_date').filter(status='Published')


class PostView(DetailView):
    template_name = 'blog/blog-post.html'
    model = Post

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['profile'] = get_object_or_404(UserProfile, id=1)
        return context

#
# def index(request, tk=1):
#     try:
#         page_number = int(tk)
#     except ValueError:
#         raise Http404("wrong item")
#     try:
#         all_posts = Post.objects.order_by('pub_date').filter(status='Published')
#         pag = Paginator(all_posts, 5)
#         if page_number > pag.num_pages:
#             raise Http404("requested Page is more than existing")
#         Page = pag.page(page_number)
#         posts = Page.object_list
#         try:
#             next_page = Page.next_page_number()
#             Page_next = pag.page(next_page)
#             try:
#                 next_next_page = Page_next.next_page_number()
#             except InvalidPage:
#                 next_next_page = False
#         except InvalidPage:
#             next_page = False
#             next_next_page = False
#         try:
#             previous_page = Page.previous_page_number()
#             Page_previous = pag.page(previous_page)
#             try:
#                 previous_previous_page = Page_previous.previous_page_number()
#             except InvalidPage:
#                 previous_previous_page = False
#         except InvalidPage:
#             previous_page = False
#             previous_previous_page = False
#     except Post.DoesNotExist:
#         posts = False
#         next_page = False
#         previous_page = False
#         next_next_page = False
#         previous_previous_page = False
#     context = {
#         'posts': posts,
#         'page_address': "blog_index",
#         'page_number': page_number,
#         'next_page': next_page,
#         'previous_page': previous_page,
#         'next_next_page': next_next_page,
#         'previous_previous_page': previous_previous_page,
#     }
#     return render(request, 'blog/index.html', context)
#
#
# def detail(request, tk):
#     try:
#         page_number = int(tk)
#     except ValueError:
#         raise Http404("wrong item")
#     try:
#         post = Post.objects.get(id=page_number)
#         print(post.picture.size)
#     except Post.DoesNotExist:
#         raise Http404("wrong item")
#     context = {
#         'post': post,
#         'page_number': page_number,
#
#     }
#     return render(request, 'blog/post.html', context)
#
#
# def category(request, cat, tk=1):
#     try:
#         page_number = int(tk)
#     except ValueError:
#         raise Http404("wrong item")
#
#     try:
#         post_category = Category.objects.get(category_title__iexact=cat)
#     except Category.DoesNotExist:
#         raise Http404("category not found")
#     try:
#         all_posts = Post.objects.order_by('pub_date')
#         all_posts = all_posts.filter(status='Published')
#         all_posts = all_posts.filter(category=post_category.id)
#         pag = Paginator(all_posts, 5)
#         if page_number > pag.num_pages:
#             raise Http404("requested Page is more than existing")
#         Page = pag.page(page_number)
#         posts = Page.object_list
#         try:
#             next_page = Page.next_page_number()
#             Page_next = pag.page(next_page)
#             try:
#                 next_next_page = Page_next.next_page_number()
#             except InvalidPage:
#                 next_next_page = False
#         except InvalidPage:
#             next_page = False
#             next_next_page = False
#         try:
#             previous_page = Page.previous_page_number()
#             Page_previous = pag.page(previous_page)
#             try:
#                 previous_previous_page = Page_previous.previous_page_number()
#             except InvalidPage:
#                 previous_previous_page = False
#         except InvalidPage:
#             previous_page = False
#             previous_previous_page = False
#     except Post.DoesNotExist:
#         posts = False
#         next_page = False
#         previous_page = False
#         next_next_page = False
#         previous_previous_page = False
#     context = {
#         'category': cat,
#         'posts': posts,
#         'page_address': "blog_category",
#         'page_number': page_number,
#         'next_page': next_page,
#         'previous_page': previous_page,
#         'next_next_page': next_next_page,
#         'previous_previous_page': previous_previous_page,
#     }
#     return render(request, 'blog/category.html', context)
#
