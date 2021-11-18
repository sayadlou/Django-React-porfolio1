import django_filters

from ..blog.models import Post


class PostFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name="title", lookup_expr="contains")

    class Meta:
        model = Post
        fields = ["title"]

