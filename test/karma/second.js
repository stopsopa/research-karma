describe('second', function () {

    var defaultTimeout;
    beforeAll(function() {
        defaultTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    });

    it('test', function (done) {

        // this.timeout(20000);

        expect(one('World')).toEqual('World!');

        // assert(greet('World') === 'Hello, World!');

        setTimeout(function () {
            // alert('default timeout: '+jasmine.DEFAULT_TIMEOUT_INTERVAL);
            console.log('test');
            done();
        }, 1000);
    });

    afterAll(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = defaultTimeout;
    });
});