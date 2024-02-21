using my.bookshop as my from '../db/data-model';

@impl: 'cat-service.js'
service CatalogService {
    @readonly entity Books as projection on my.Books;
    action handleNotification ( );
}
