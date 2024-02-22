using my.bookshop as my from '../db/data-model';

@impl: 'srv/cat-service.js'
service CatalogService {
    @readonly
    entity Books as projection on my.Books;

    action handleNotification();
    action sum();
}
