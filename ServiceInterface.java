package com.august.memo;

interface ServiceInterface {
    abstract String getResult();
    abstract String postResult(Object name);
    abstract String putResult(Object name);
    abstract String deleteResult(String id);
    abstract String patchResult(String id);

    
}
